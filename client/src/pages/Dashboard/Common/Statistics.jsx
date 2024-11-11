import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
import GuestStatistics from "../Guests/GuestStatistics";
import HostStatistics from "../Hosts/HostStatistics";

const Statistics = () => {
  const [role, isLoading] = useRole();

  if(isLoading) return <LoadingSpinner/>
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        Welcome to Statistics page,{role}
      </h1>
      {role === "Admin" && <AdminStatistics />}
      {role === "Host" && <HostStatistics />}
      {role === "Guest" && <GuestStatistics/>}
    </div>
  );
};

export default Statistics;
