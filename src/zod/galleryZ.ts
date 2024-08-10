
import { z } from 'zod';


 const addGalleryImageZ = z.object({
  imgSrc: z.string().url(), 
  title: z.string().min(1).max(100), 
});


 const deleteGalleryImageZ = z.object({
  id: z.string().uuid(),
});

export{
  addGalleryImageZ ,
  deleteGalleryImageZ
}
