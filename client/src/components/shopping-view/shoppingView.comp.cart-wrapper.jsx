import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./shoppingView.comp.cart-items-content";



function UserCartWrapper({cartItems }) {
    return ( 
        <SheetContent className='sm:max-w-md'>
            <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4 p-3">
                {
                    cartItems && cartItems.length > 0 ?
                        cartItems.map((item) => (<UserCartItemsContent cartItems={item}/>)) : null
                }
            </div>
            <div className="mt-8 space-y-4">
                <div className="flex justify-between ml-4 mr-4">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">$1000</span>
                </div>
            </div>
            <div className="mt-5 ml-2 mr-2">
                <Button className='w-full mt-5'>Checkout</Button>
            </div>
        </SheetContent>
     );
}

export default UserCartWrapper;