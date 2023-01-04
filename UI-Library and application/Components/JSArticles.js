import { NEXT_JS_COOL_SITES }  from '../nextjsSiteList.js';
import  List  from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';


export default function ResourcesList() {
    return <List>
      { NEXT_JS_COOL_SITES.map((resource, index)=> {
          return <ListItem key={index}> <Typography  color="primary"><a href={resource.url}>{resource.name}</a></Typography>
            
          </ListItem>
        })
      }
    </List>

    }