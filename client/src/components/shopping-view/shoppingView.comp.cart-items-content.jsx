import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";



function UserCartItemsContent({cartItems}) {
    return ( 
        <div className="flex items-center space-x-4">
            <img src={cartItems?.image} alt={cartItems?.title} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
                <h3 className="font-extrabold">{cartItems?.title}</h3>
                <div className="flex items-center mt-1 gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Minus className="w-4 h-4"/>
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <span className="font-semibold">{cartItems?.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Plus className="h-4 w-4"/>
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="font-semibold">
                    $ {((cartItems?.salePrice > 0 ? cartItems?.salePrice : cartItems?.price) * cartItems?.quantity).toFixed(2)}
                </p>
            </div>
        </div>
     );
}

export default UserCartItemsContent;