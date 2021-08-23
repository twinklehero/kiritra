import { Card } from '@material-ui/core'

const KCard = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>
}

KCard.muiName = Card.muiName

export default KCard
