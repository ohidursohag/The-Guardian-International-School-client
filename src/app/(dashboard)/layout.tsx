import { ChildrenProps } from "@/utils/types";

const DashboardLayout:React.FC<ChildrenProps> = ({children}) => {

  return (
    <div>
       <div> {children} </div>
    </div>
  )
};

export default DashboardLayout;
