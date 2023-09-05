import { TileItem } from "../components/TileItem/TileItem"; 
import {Meta, StoryObj} from "@storybook/react" 

const meta : Meta<typeof TileItem> = {
    component: TileItem
} 
export default meta ; 
type Story = StoryObj<typeof TileItem> ; 
export const FirstStory : Story = {
    args : {list : false,
    genres: [{
        mal_id: 1,
        type: "PG",
        name: "Supernatural",
        url: "google.com"
      },{
        mal_id: 1,
        type: "PG",
        name: "Supernatural",
        url: "google.com"
      }]}
} 

export const SecondStory : Story = {
    args : {list : true}
}