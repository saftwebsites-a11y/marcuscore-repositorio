import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Pause } from "lucide-react"

export default function ServiceStatusList() {
  // Dados de exemplo para status dos serviços
  const services = [
    {
      name: "Apache",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "256 MB",
      cpu: "2.3%",
    },
    {
      name: "MySQL",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "512 MB",
      cpu: "4.1%",
    },
    {
      name: "PHP-FPM",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "384 MB",
      cpu: "3.2%",
    },
    {
      name: "Postfix",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "128 MB",
      cpu: "0.8%",
    },
    {
      name: "Dovecot",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "96 MB",
      cpu: "0.5%",
    },
    {
      name: "Bind",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "64 MB",
      cpu: "0.3%",
    },
    {
      name: "Fail2Ban",
      status: "Ativo",
      uptime: "15 dias, 7 horas",
      memory: "32 MB",
      cpu: "0.1%",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" className="gap-1">
          <RefreshCw className="h-4 w-4" />
          Atualizar
        </Button>
      </div>
      <div className="rounded-md border">
        <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium border-b">
          <div>Serviço</div>
          <div>Status</div>
          <div>Uptime</div>
          <div>Memória</div>
          <div>CPU</div>
          <div className="text-right">Ações</div>
        </div>
        <div className="divide-y">
          {services.map((service) => (
            <div key={service.name} className="grid grid-cols-6 gap-4 p-4 text-sm">
              <div className="font-medium">{service.name}</div>
              <div>
                <Badge variant="default">{service.status}</Badge>
              </div>
              <div>{service.uptime}</div>
              <div>{service.memory}</div>
              <div>{service.cpu}</div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Pause className="h-4 w-4" />
                  <span className="sr-only">Parar</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                  <span className="sr-only">Reiniciar</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
