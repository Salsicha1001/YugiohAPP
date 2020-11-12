import { Card } from './../Card.model';
import { UserModel } from './../User.model';
export interface CardsDTO{
  id: string
  user: UserModel
  card:Card
}