"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Server,
  Globe,
  Database,
  Mail,
  Shield,
  HardDrive,
  Settings,
  Menu,
  X,
  FileCode,
  BarChart,
  Clock,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Contas de Hospedagem",
      icon: User,
      href: "/dashboard/accounts",
      active: pathname === "/dashboard/accounts",
    },
    {
      label: "Domínios & DNS",
      icon: Globe,
      href: "/dashboard/domains",
      active: pathname === "/dashboard/domains",
    },
    {
      label: "Bancos de Dados",
      icon: Database,
      href: "/dashboard/databases",
      active: pathname === "/dashboard/databases",
    },
    {
      label: "Email",
      icon: Mail,
      href: "/dashboard/email",
      active: pathname === "/dashboard/email",
    },
    {
      label: "Servidores Web",
      icon: FileCode,
      href: "/dashboard/webservers",
      active: pathname === "/dashboard/webservers",
    },
    {
      label: "Backups",
      icon: HardDrive,
      href: "/dashboard/backups",
      active: pathname === "/dashboard/backups",
    },
    {
      label: "Segurança",
      icon: Shield,
      href: "/dashboard/security",
      active: pathname === "/dashboard/security",
    },
    {
      label: "Monitoramento",
      icon: BarChart,
      href: "/dashboard/monitoring",
      active: pathname === "/dashboard/monitoring",
    },
    {
      label: "Tarefas Agendadas",
      icon: Clock,
      href: "/dashboard/tasks",
      active: pathname === "/dashboard/tasks",
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Alternar Menu</span>
      </Button>
      <div
        className={cn("fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 border-r bg-background transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <Server className="h-6 w-6" />
            MarcusCore
          </Link>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
