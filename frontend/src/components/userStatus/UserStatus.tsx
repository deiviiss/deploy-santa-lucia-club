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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white shadow rounded-lg">
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-500">Estado de la membresia</p>
        <Badge color={membershipStatus === "activa" ? "success" : "default"}>
          {membershipStatus}
        </Badge>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-500">Valor mensual</p>
        <p className="font-bold">US$ {monthlyValue}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-500">Fecha de vencimiento</p>
        <p className="font-bold">{expirationDate}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-500">Nro de socio</p>
        <p className="font-bold">{numberOfUses}</p>
      </div>
    </div>
  );
};

export default UserStatus;
