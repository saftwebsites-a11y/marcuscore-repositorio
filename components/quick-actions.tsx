import { Button } from "@/components/ui/button"
import { RefreshCw, Power, HardDrive, Shield, Database, FileCode } from "lucide-react"

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="h-24 flex-col gap-2">
        <Power className="h-6 w-6" />
        <span>Reiniciar Servidor</span>
      </Button>
      <Button variant="outline" className="h-24 flex-col gap-2">
        <RefreshCw className="h-6 w-6" />
        <span>Reiniciar Serviços</span>
      </Button>
      <Button variant="outline" className="h-24 flex-col gap-2">
        <HardDrive className="h-6 w-6" />
        <span>Criar Backup</span>
      </Button>
      <Button variant="outline" className="h-24 flex-col gap-2">
        <Shield className="h-6 w-6" />
        <span>Verificação de Segurança</span>
      </Button>
      <Button variant="outline" className="h-24 flex-col gap-2">
        <Database className="h-6 w-6" />
        <span>Admin de Banco de Dados</span>
      </Button>
      <Button variant="outline" className="h-24 flex-col gap-2">
        <FileCode className="h-6 w-6" />
        <span>Gerenciador de Arquivos</span>
      </Button>
    </div>
  )
}
