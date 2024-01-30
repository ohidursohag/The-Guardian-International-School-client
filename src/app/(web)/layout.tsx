import Header from "@/components/Shared/Header/Header";
import { ChildrenProps } from "@/utils/types";

const WebLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div>
      <Header/>
      <div> {children} </div>
    </div>
  );
};

export default WebLayout;
