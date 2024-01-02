import { authorType } from '../../@types/authorType'

interface MyProps {
  [key: string]: any;
  sourceName: string;
  ItemComponent: React.FC<any>;
}

const RegularList: React.FC<MyProps> = ({ items, sourceName,  ItemComponent }) => {
  return (
    <>
      {items.map((item: any) => <ItemComponent {...{ [sourceName]: item }}/>)}
    </>
  )
}

export default RegularList;