import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, Globe, ExternalLink, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DomainsPage() {
  // Sample domains data
  const domains = [
    {
      id: 1,
      name: "example.com",
      account: "example",
      expiry: "15/06/2025",
      dns: "Personalizado",
      ssl: "Ativo",
      status: "Ativo",
    },
    {
      id: 2,
      name: "client1.com",
      account: "client1",
      expiry: "22/11/2024",
      dns: "Padrão",
      ssl: "Ativo",
      status: "Ativo",
    },
    {
      id: 3,
      name: "testsite.org",
      account: "testsite",
      expiry: "30/08/2024",
      dns: "Padrão",
      ssl: "Inativo",
      status: "Pendente",
    },
    {
      id: 4,
      name: "devproject.net",
      account: "devproject",
      expiry: "10/02/2025",
      dns: "Personalizado",
      ssl: "Ativo",
      status: "Ativo",
    },
    {
      id: 5,
      name: "subdomain.example.com",
      account: "example",
      expiry: "-",
      dns: "Padrão",
      ssl: "Inativo",
      status: "Ativo",
    },
  ]

  // Sample DNS records
  const dnsRecords = [
    {
      id: 1,
      domain: "example.com",
      type: "A",
      name: "@",
      content: "192.168.1.1",
      ttl: "3600",
    },
    {
      id: 2,
      domain: "example.com",
      type: "CNAME",
      name: "www",
      content: "example.com",
      ttl: "3600",
    },
    {
      id: 3,
      domain: "example.com",
      type: "MX",
      name: "@",
      content: "mail.example.com",
      priority: "10",
      ttl: "3600",
    },
    {
      id: 4,
      domain: "example.com",
      type: "TXT",
      name: "@",
      content: "v=spf1 include:_spf.example.com ~all",
      ttl: "3600",
    },
    {
      id: 5,
      domain: "example.com",
      type: "NS",
      name: "@",
      content: "ns1.example.com",
      ttl: "86400",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Domínios</h2>
          <p className="text-muted-foreground">Gerencie domínios, registros DNS e configurações</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Adicionar Domínio
        </Button>
      </div>

      <Tabs defaultValue="domains" className="space-y-4">
        <TabsList>
          <TabsTrigger value="domains">Domínios</TabsTrigger>
          <TabsTrigger value="dns">Registros DNS</TabsTrigger>
          <TabsTrigger value="ssl">Certificados SSL</TabsTrigger>
        </TabsList>

        <TabsContent value="domains">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Domínios</CardTitle>
                <CardDescription>Gerencie nomes de domínio e configurações de DNS</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar domínios..." className="w-[200px] pl-8 md:w-[300px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domínio</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Data de Expiração</TableHead>
                    <TableHead>DNS</TableHead>
                    <TableHead>SSL</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domains.map((domain) => (
                    <TableRow key={domain.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{domain.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{domain.account}</TableCell>
                      <TableCell>{domain.expiry}</TableCell>
                      <TableCell>{domain.dns}</TableCell>
                      <TableCell>
                        <Badge variant={domain.ssl === "Ativo" ? "default" : "outline"}>{domain.ssl}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            domain.status === "Ativo"
                              ? "default"
                              : domain.status === "Pendente"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {domain.status}
                        </Badge>
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
                              Visitar Site
                            </DropdownMenuItem>
                            <DropdownMenuItem>Editar Registros DNS</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="mr-2 h-4 w-4" />
                              Gerenciar SSL
                            </DropdownMenuItem>
                            <DropdownMenuItem>Configurações de Domínio</DropdownMenuItem>
                            <DropdownMenuItem>Transferir Domínio</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Domínio</DropdownMenuItem>
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

        <TabsContent value="dns">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Registros DNS</CardTitle>
                <CardDescription>Gerencie registros DNS para seus domínios</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative mr-2">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar registros..." className="w-[200px] pl-8 md:w-[300px]" />
                </div>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  Novo Registro
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domínio</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Conteúdo</TableHead>
                    <TableHead>TTL</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dnsRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.domain}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{record.type}</Badge>
                      </TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{record.content}</TableCell>
                      <TableCell>{record.ttl}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Abrir menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Editar Registro</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Registro</DropdownMenuItem>
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

        <TabsContent value="ssl">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Certificados SSL</CardTitle>
                <CardDescription>Gerencie certificados SSL para seus domínios</CardDescription>
              </div>
              <Button className="ml-auto gap-1">
                <Plus className="h-4 w-4" />
                Novo Certificado
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domínio</TableHead>
                    <TableHead>Provedor</TableHead>
                    <TableHead>Emitido em</TableHead>
                    <TableHead>Expira em</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>example.com</TableCell>
                    <TableCell>Let's Encrypt</TableCell>
                    <TableCell>15/03/2023</TableCell>
                    <TableCell>15/06/2023</TableCell>
                    <TableCell>
                      <Badge variant="default">Ativo</Badge>
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
                          <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Renovar Certificado</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Revogar Certificado</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>client1.com</TableCell>
                    <TableCell>Let's Encrypt</TableCell>
                    <TableCell>10/04/2023</TableCell>
                    <TableCell>10/07/2023</TableCell>
                    <TableCell>
                      <Badge variant="default">Ativo</Badge>
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
                          <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Renovar Certificado</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Revogar Certificado</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
