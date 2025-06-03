import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";


function ShoppingProductTile({product, handleGetProductDetails}) {
    return ( 
        <Card className='w-full max-w-sm mx-auto'>
            <div onClick={() => handleGetProductDetails(product?._id)}>
                <div className="relative">
                    <img src={product?.image} alt={product?.title} className="w-full h-[300px] object-cover rounded-t-lg" />
                    {
                        product?.salePrice > 0 ? (
                            <Badge className='absolute top-2 left-2 bg-red-400 hover:bg-red-500'>Sale: {product?.salePrice}</Badge>
                        ) : null
                    }
                </div>
                <CardContent className='p-4 mb-6'>
                    <h2 className="text-2xl font-bold mb-2 mx-auto">{product?.title}</h2>
                    <div className="flex justify-between items-center mb-5">
                        <span className="text-sm text-muted-foreground">{product?.category}</span>
                        <span className="text-sm text-muted-foreground">{product?.brand}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className={`${product?.price > 0 ? 'line-through' : ''} text-lg font-semibold text-primary`}>{product?.price}</span>
                        {
                            product?.salePrice > 0 ? (
                                <span className="text-lg font-semibold text-primary">{product?.salePrice}</span>
                            ) : null
                        }
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between items-center'>
                    <Button className='w-full'>Add to Cart</Button>
                </CardFooter>
            </div>
        </Card>
     );
}

export default ShoppingProductTile;