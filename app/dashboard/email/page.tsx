import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, Mail, ExternalLink, Forward, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmailPage() {
  // Sample email accounts data
  const emailAccounts = [
    {
      id: 1,
      email: "admin@example.com",
      domain: "example.com",
      quota: "2 GB / 5 GB",
      forwarders: 0,
      status: "Ativo",
    },
    {
      id: 2,
      email: "info@client1.com",
      domain: "client1.com",
      quota: "1.5 GB / 2 GB",
      forwarders: 2,
      status: "Ativo",
    },
    {
      id: 3,
      email: "support@testsite.org",
      domain: "testsite.org",
      quota: "0.8 GB / 2 GB",
      forwarders: 1,
      status: "Ativo",
    },
    {
      id: 4,
      email: "contact@devproject.net",
      domain: "devproject.net",
      quota: "0.2 GB / 1 GB",
      forwarders: 0,
      status: "Ativo",
    },
    {
      id: 5,
      email: "sales@example.com",
      domain: "example.com",
      quota: "1.2 GB / 2 GB",
      forwarders: 3,
      status: "Ativo",
    },
  ]

  // Sample forwarders data
  const forwarders = [
    {
      id: 1,
      source: "info@example.com",
      destination: "admin@example.com",
      domain: "example.com",
      status: "Ativo",
    },
    {
      id: 2,
      source: "contact@client1.com",
      destination: "info@client1.com",
      domain: "client1.com",
      status: "Ativo",
    },
    {
      id: 3,
      source: "sales@testsite.org",
      destination: "support@testsite.org",
      domain: "testsite.org",
      status: "Ativo",
    },
    {
      id: 4,
      source: "support@example.com",
      destination: "admin@example.com, support@external.com",
      domain: "example.com",
      status: "Ativo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Email</h2>
          <p className="text-muted-foreground">Gerencie contas de email, encaminhamentos e configurações</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Nova Conta de Email
        </Button>
      </div>

      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="accounts">Contas</TabsTrigger>
          <TabsTrigger value="forwarders">Encaminhamentos</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Contas de Email</CardTitle>
                <CardDescription>Gerencie contas de email, encaminhamentos e filtros</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar emails..." className="w-[200px] pl-8 md:w-[300px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Domínio</TableHead>
                    <TableHead>Cota</TableHead>
                    <TableHead>Encaminhamentos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{account.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>{account.domain}</TableCell>
                      <TableCell>{account.quota}</TableCell>
                      <TableCell>{account.forwarders}</TableCell>
                      <TableCell>
                        <Badge variant="default">{account.status}</Badge>
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
                              Webmail
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Forward className="mr-2 h-4 w-4" />
                              Gerenciar Encaminhamentos
                            </DropdownMenuItem>
                            <DropdownMenuItem>Alterar Senha</DropdownMenuItem>
                            <DropdownMenuItem>Configurações de Spam</DropdownMenuItem>
                            <DropdownMenuItem>Gerenciar Filtros</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Conta</DropdownMenuItem>
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

        <TabsContent value="forwarders">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Encaminhamentos de Email</CardTitle>
                <CardDescription>Gerencie encaminhamentos de email para seus domínios</CardDescription>
              </div>
              <Button className="ml-auto gap-1">
                <Plus className="h-4 w-4" />
                Novo Encaminhamento
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Origem</TableHead>
                    <TableHead>Destino</TableHead>
                    <TableHead>Domínio</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {forwarders.map((forwarder) => (
                    <TableRow key={forwarder.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{forwarder.source}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">{forwarder.destination}</TableCell>
                      <TableCell>{forwarder.domain}</TableCell>
                      <TableCell>
                        <Badge variant="default">{forwarder.status}</Badge>
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
                            <DropdownMenuItem>Editar Encaminhamento</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir Encaminhamento</DropdownMenuItem>
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

        <TabsContent value="security">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Segurança de Email</CardTitle>
                <CardDescription>Configure SPF, DKIM e DMARC para seus domínios</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">SPF (Sender Policy Framework)</h3>
                      <p className="text-sm text-muted-foreground">
                        Protege seu domínio contra falsificação de email especificando quais servidores podem enviar
                        emails em seu nome.
                      </p>
                    </div>
                    <Button variant="outline" className="gap-1">
                      <Shield className="h-4 w-4" />
                      Configurar SPF
                    </Button>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm">v=spf1 include:_spf.example.com ~all</code>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">DKIM (DomainKeys Identified Mail)</h3>
                      <p className="text-sm text-muted-foreground">
                        Adiciona uma assinatura digital aos seus emails para verificar que eles não foram alterados
                        durante o trânsito.
                      </p>
                    </div>
                    <Button variant="outline" className="gap-1">
                      <Shield className="h-4 w-4" />
                      Configurar DKIM
                    </Button>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm">v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...</code>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">
                        DMARC (Domain-based Message Authentication, Reporting & Conformance)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Informa aos servidores de email o que fazer com mensagens que falham na autenticação SPF ou
                        DKIM.
                      </p>
                    </div>
                    <Button variant="outline" className="gap-1">
                      <Shield className="h-4 w-4" />
                      Configurar DMARC
                    </Button>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm">v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
