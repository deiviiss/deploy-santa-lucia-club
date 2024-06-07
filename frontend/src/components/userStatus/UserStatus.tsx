import { Badge } from '@nextui-org/react';

interface UserStatusProps {
  membershipStatus: string;
  monthlyValue: number;
  expirationDate: string;
  numberOfUses: number;
}

const UserStatus: React.FC<UserStatusProps> = ({
  membershipStatus,
  monthlyValue,
  expirationDate,
  numberOfUses,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 shadow rounded-lg bg-transparent">
      <div className="flex flex-col items-center p-4 border-2 rounded-lg border-blue-500">
        <p className="text-xs text-blue-500">Estado de membresía</p>
        <Badge variant="flat" color={membershipStatus === "activo" ? "success" : "default"}>
          <span className={`font-bold ${membershipStatus === "activo" ? "text-green-500" : "text-red-500"}`}>
            {membershipStatus.charAt(0).toUpperCase() + membershipStatus.slice(1)}
          </span>
        </Badge>
      </div>
      <div className="flex flex-col items-center p-4 border-2 rounded-lg border-blue-500">
        <p className="text-xs text-blue-500">Valor de la cuota</p>
        <p className="font-bold text-blue-500">${monthlyValue.toLocaleString('es-CL')}</p>
      </div>
      <div className="flex flex-col items-center p-4 border-2 rounded-lg border-blue-500">
        <p className="text-xs text-blue-500">Vencimiento de la cuota</p>
        <p className="font-bold text-blue-500">{expirationDate}</p>
      </div>
      <div className="flex flex-col items-center p-4 border-2 rounded-lg border-blue-500">
        <p className="text-xs text-blue-500">Numero de socio</p>
        <p className="font-bold text-blue-500">{numberOfUses}</p>
      </div>
    </div>
  );
};

export default UserStatus;
