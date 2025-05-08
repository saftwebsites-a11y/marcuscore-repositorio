import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, Database, Download, Upload, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DatabasesPage() {
  // Sample databases data
  const databases = [
    {
      id: 1,
      name: "example_wp",
      account: "example",
      type: "MySQL",
      size: "245 MB",
      status: "Ativo",
    },
    {
      id: 2,
      name: "client1_shop",
      account: "client1",
      type: "MariaDB",
      size: "1.2 GB",
      status: "Ativo",
    },
    {
      id: 3,
      name: "testsite_forum",
      account: "testsite",
      type: "MySQL",
      size: "450 MB",
      status: "Ativo",
    },
    {
      id: 4,
      name: "devproject_app",
      account: "devproject",
      type: "MariaDB",
      size: "120 MB",
      status: "Ativo",
    },
    {
      id: 5,
      name: "example_blog",
      account: "example",
      type: "MySQL",
      size: "180 MB",
      status: "Ativo",
    },
  ]

  // Sample database users
  const dbUsers = [
    {
      id: 1,
      username: "example_user",
      account: "example",
      databases: 2,
      privileges: "ALL PRIVILEGES",
      status: "Ativo",
    },
    {
      id: 2,
      username: "client1_user",
      account: "client1",
      databases: 1,
      privileges: "SELECT, INSERT, UPDATE",
      status: "Ativo",
    },
    {
      id: 3,
      username: "testsite_admin",
      account: "testsite",
      databases: 1,
      privileges: "ALL PRIVILEGES",
      status: "Ativo",
    },
    {
      id: 4,
      username: "devproject_ro",
      account: "devproject",
      databases: 1,
      privileges: "SELECT",
      status: "Ativo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Bancos de Dados</h2>
          <p className="text-muted-foreground">Gerencie bancos de dados MySQL/MariaDB e usuários</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Upload className="h-4 w-4" />
            Importar
          </Button>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            Criar Banco de Dados
          </Button>
        </div>
      </div>

      <Tabs defaultValue="databases" className="space-y-4">
        <TabsList>
          <TabsTrigger value="databases">Bancos de Dados</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
        </TabsList>

        <TabsContent value="databases">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Bancos de Dados</CardTitle>
                <CardDescription>Gerencie bancos de dados, usuários e permissões</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar bancos de dados..."
                    className="w-[200px] pl-8 md:w-[300px]"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banco de Dados</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Tamanho</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {databases.map((db) => (
                    <TableRow key={db.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{db.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{db.account}</TableCell>
                      <TableCell>{db.type}</TableCell>
                      <TableCell>{db.size}</TableCell>
                      <TableCell>
                        <Badge variant="default">{db.status}</Badge>
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
                            <DropdownMenuItem>phpMyAdmin</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Backup do Banco de Dados
                            </DropdownMenuItem>
                            <DropdownMenuItem>Gerenciar Usuários</DropdownMenuItem>
                            <DropdownMenuItem>Reparar Banco de Dados</DropdownMenuItem>
                            <DropdownMenuItem>Otimizar Banco de Dados</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Banco de Dados</DropdownMenuItem>
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

        <TabsContent value="users">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Usuários de Banco de Dados</CardTitle>
                <CardDescription>Gerencie usuários e permissões de banco de dados</CardDescription>
              </div>
              <Button className="ml-auto gap-1">
                <Plus className="h-4 w-4" />
                Novo Usuário
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Bancos de Dados</TableHead>
                    <TableHead>Privilégios</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dbUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{user.username}</span>
                        </div>
                      </TableCell>
                      <TableCell>{user.account}</TableCell>
                      <TableCell>{user.databases}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{user.privileges}</TableCell>
                      <TableCell>
                        <Badge variant="default">{user.status}</Badge>
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
                            <DropdownMenuItem>Editar Usuário</DropdownMenuItem>
                            <DropdownMenuItem>Alterar Senha</DropdownMenuItem>
                            <DropdownMenuItem>Gerenciar Privilégios</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Usuário</DropdownMenuItem>
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
