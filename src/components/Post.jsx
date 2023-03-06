import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";


const Post = () => {
  return (
    <Card sx={{ margin: 3 , size: 30}}>
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/id/1162898563/photo/chicago-urban-skyscrapers-usa.jpg?b=1&s=170667a&w=0&k=20&c=CaKpMTFpA3Vk2Dkd_ajCfsZbrpuYiJS_J7Nw1CanZUc="
        alt="HOME LLC"
      />
      <CardHeader disableSpacing>
        US States And Metros, Ranked!
      </CardHeader>

      <CardActions disableSpacing>
        How good is your state on home ownership and education? How does your metro perform on crime and demographics?
      </CardActions>

      <CardActions disableSpacing>    
        Find out all that and more, below!
      </CardActions>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Just follow these steps:
          <li> Select Any Tab </li>
          <li>Filter Your State/Metro </li>
          <li>Enjoy!</li>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
