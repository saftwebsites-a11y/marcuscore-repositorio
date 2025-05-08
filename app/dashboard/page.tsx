import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CpuIcon, HardDrive, Network, MemoryStick } from "lucide-react"
import ResourceUsageChart from "@/components/resource-usage-chart"
import ServerStatusCard from "@/components/server-status-card"
import QuickActions from "@/components/quick-actions"
import ServiceStatusList from "@/components/service-status-list"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Painel de Controle</h2>
          <p className="text-muted-foreground">Visão geral dos recursos e status do servidor</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Desempenho</TabsTrigger>
          <TabsTrigger value="services">Serviços</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ServerStatusCard
              title="CPU"
              value="24%"
              icon={<CpuIcon className="h-4 w-4" />}
              description="4 cores @ 2.4GHz"
              trend="up"
              trendValue="3%"
            />
            <ServerStatusCard
              title="Memória"
              value="42%"
              icon={<MemoryStick className="h-4 w-4" />}
              description="3.4 GB / 8 GB"
              trend="down"
              trendValue="1%"
            />
            <ServerStatusCard
              title="Disco"
              value="68%"
              icon={<HardDrive className="h-4 w-4" />}
              description="68 GB / 100 GB"
              trend="up"
              trendValue="2%"
            />
            <ServerStatusCard
              title="Rede"
              value="12 MB/s"
              icon={<Network className="h-4 w-4" />}
              description="1.2 TB mensal"
              trend="up"
              trendValue="8%"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Uso de Recursos</CardTitle>
                <CardDescription>Uso de recursos do sistema nas últimas 24 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceUsageChart />
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
                <CardDescription>Tarefas comuns de gerenciamento do servidor</CardDescription>
              </CardHeader>
              <CardContent>
                <QuickActions />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Contas de Hospedagem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">4 ativas, 8 suspensas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Domínios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">24 ativos, 4 pendentes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Bancos de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35</div>
                <p className="text-xs text-muted-foreground">MySQL/MariaDB</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Contas de Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">8 domínios</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Desempenho</CardTitle>
              <CardDescription>Análise detalhada de desempenho do servidor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResourceUsageChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Status dos Serviços</CardTitle>
              <CardDescription>Status de todos os serviços em execução</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceStatusList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
