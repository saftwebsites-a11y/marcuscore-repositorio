import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, User, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountsPage() {
  // Sample hosting accounts data
  const hostingAccounts = [
    {
      id: 1,
      name: "example.com",
      username: "example",
      package: "Business",
      domains: 5,
      diskUsage: "2.4 GB / 10 GB",
      status: "Ativo",
    },
    {
      id: 2,
      name: "client1.com",
      username: "client1",
      package: "Standard",
      domains: 2,
      diskUsage: "1.2 GB / 5 GB",
      status: "Ativo",
    },
    {
      id: 3,
      name: "testsite.org",
      username: "testsite",
      package: "Premium",
      domains: 10,
      diskUsage: "4.8 GB / 20 GB",
      status: "Suspenso",
    },
    {
      id: 4,
      name: "devproject.net",
      username: "devproject",
      package: "Standard",
      domains: 3,
      diskUsage: "0.8 GB / 5 GB",
      status: "Ativo",
    },
  ]

  // Sample packages data
  const packages = [
    {
      id: 1,
      name: "Basic",
      domains: 1,
      diskSpace: "1 GB",
      bandwidth: "10 GB",
      databases: 2,
      emailAccounts: 5,
      price: "R$19,90",
    },
    {
      id: 2,
      name: "Standard",
      domains: 5,
      diskSpace: "5 GB",
      bandwidth: "50 GB",
      databases: 10,
      emailAccounts: 20,
      price: "R$39,90",
    },
    {
      id: 3,
      name: "Business",
      domains: 10,
      diskSpace: "10 GB",
      bandwidth: "100 GB",
      databases: 20,
      emailAccounts: 50,
      price: "R$69,90",
    },
    {
      id: 4,
      name: "Premium",
      domains: 20,
      diskSpace: "20 GB",
      bandwidth: "200 GB",
      databases: "Ilimitado",
      emailAccounts: "Ilimitado",
      price: "R$99,90",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contas de Hospedagem</h2>
          <p className="text-muted-foreground">Gerencie contas de hospedagem e pacotes</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Nova Conta
        </Button>
      </div>

      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="accounts">Contas</TabsTrigger>
          <TabsTrigger value="packages">Pacotes</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Contas</CardTitle>
                <CardDescription>Gerencie contas de hospedagem, recursos e configurações</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar contas..." className="w-[200px] pl-8 md:w-[300px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Conta</TableHead>
                    <TableHead>Pacote</TableHead>
                    <TableHead>Domínios</TableHead>
                    <TableHead>Uso de Disco</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hostingAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{account.name}</div>
                            <div className="text-sm text-muted-foreground">{account.username}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{account.package}</TableCell>
                      <TableCell>{account.domains}</TableCell>
                      <TableCell>{account.diskUsage}</TableCell>
                      <TableCell>
                        <Badge variant={account.status === "Ativo" ? "default" : "destructive"}>{account.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Abrir menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Acessar cPanel
                            </DropdownMenuItem>
                            <DropdownMenuItem>Editar Conta</DropdownMenuItem>
                            <DropdownMenuItem>Gerenciar Domínios</DropdownMenuItem>
                            <DropdownMenuItem>Configurações de Email</DropdownMenuItem>
                            <DropdownMenuItem>Gerenciador de Banco de Dados</DropdownMenuItem>
                            <DropdownMenuItem>Gerenciador de Arquivos</DropdownMenuItem>
                            <DropdownMenuItem>Backup/Restauração</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Suspender Conta</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="packages">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Pacotes</CardTitle>
                <CardDescription>Gerencie pacotes de hospedagem e limites de recursos</CardDescription>
              </div>
              <Button className="ml-auto gap-1">
                <Plus className="h-4 w-4" />
                Novo Pacote
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Domínios</TableHead>
                    <TableHead>Espaço em Disco</TableHead>
                    <TableHead>Largura de Banda</TableHead>
                    <TableHead>Bancos de Dados</TableHead>
                    <TableHead>Contas de Email</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {packages.map((pkg) => (
                    <TableRow key={pkg.id}>
                      <TableCell className="font-medium">{pkg.name}</TableCell>
                      <TableCell>{pkg.domains}</TableCell>
                      <TableCell>{pkg.diskSpace}</TableCell>
                      <TableCell>{pkg.bandwidth}</TableCell>
                      <TableCell>{pkg.databases}</TableCell>
                      <TableCell>{pkg.emailAccounts}</TableCell>
                      <TableCell>{pkg.price}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Abrir menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Editar Pacote</DropdownMenuItem>
                            <DropdownMenuItem>Duplicar Pacote</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Pacote</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
