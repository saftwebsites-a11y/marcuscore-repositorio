"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Gerar dados de exemplo para o gráfico
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const time = new Date(now)
    time.setHours(now.getHours() - i)

    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      cpu: Math.floor(Math.random() * 40) + 10,
      memory: Math.floor(Math.random() * 30) + 30,
      disk: Math.floor(Math.random() * 10) + 60,
      network: Math.floor(Math.random() * 20) + 5,
    })
  }

  return data
}

export default function ResourceUsageChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(generateData())

    // Atualizar dados a cada 5 minutos
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)]
        const now = new Date()

        newData.push({
          time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          cpu: Math.floor(Math.random() * 40) + 10,
          memory: Math.floor(Math.random() * 30) + 30,
          disk: Math.floor(Math.random() * 10) + 60,
          network: Math.floor(Math.random() * 20) + 5,
        })

        return newData
      })
    }, 300000) // 5 minutos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" stroke="#f43f5e" name="CPU %" />
          <Line type="monotone" dataKey="memory" stroke="#3b82f6" name="Memória %" />
          <Line type="monotone" dataKey="disk" stroke="#10b981" name="Disco %" />
          <Line type="monotone" dataKey="network" stroke="#8b5cf6" name="Rede MB/s" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
