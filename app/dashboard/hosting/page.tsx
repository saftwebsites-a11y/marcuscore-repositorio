import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HostingPage() {
  // Sample hosting accounts data
  const hostingAccounts = [
    {
      id: 1,
      name: "example.com",
      username: "example",
      package: "Business",
      domains: 5,
      diskUsage: "2.4 GB / 10 GB",
      status: "Active",
    },
    {
      id: 2,
      name: "client1.com",
      username: "client1",
      package: "Standard",
      domains: 2,
      diskUsage: "1.2 GB / 5 GB",
      status: "Active",
    },
    {
      id: 3,
      name: "testsite.org",
      username: "testsite",
      package: "Premium",
      domains: 10,
      diskUsage: "4.8 GB / 20 GB",
      status: "Suspended",
    },
    {
      id: 4,
      name: "devproject.net",
      username: "devproject",
      package: "Standard",
      domains: 3,
      diskUsage: "0.8 GB / 5 GB",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Hosting Accounts</h2>
          <p className="text-muted-foreground">Manage your hosting accounts and domains</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Account
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>Accounts</CardTitle>
            <CardDescription>Manage hosting accounts, resources, and settings</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search accounts..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Domains</TableHead>
                <TableHead>Disk Usage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hostingAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>
                    <div className="font-medium">{account.name}</div>
                    <div className="text-sm text-muted-foreground">{account.username}</div>
                  </TableCell>
                  <TableCell>{account.package}</TableCell>
                  <TableCell>{account.domains}</TableCell>
                  <TableCell>{account.diskUsage}</TableCell>
                  <TableCell>
                    <Badge variant={account.status === "Active" ? "default" : "destructive"}>{account.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Account</DropdownMenuItem>
                        <DropdownMenuItem>Manage Domains</DropdownMenuItem>
                        <DropdownMenuItem>Email Settings</DropdownMenuItem>
                        <DropdownMenuItem>Database Manager</DropdownMenuItem>
                        <DropdownMenuItem>File Manager</DropdownMenuItem>
                        <DropdownMenuItem>Backup/Restore</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
