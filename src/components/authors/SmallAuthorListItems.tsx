import { authorType } from '../../@types/authorType'

const SmallAuthorListItem: React.FC<{author: authorType}> = ({author}) => {
  const {name, age} = author
  return(
    <p>Name: {name}, Age: {age}</p>
  )
}

export default SmallAuthorListItem;
