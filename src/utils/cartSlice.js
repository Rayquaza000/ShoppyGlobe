import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
            ++state.count;
        },
        removeItem:(state,action)=>{
            console.log("reached")
            state.items.forEach((item,index)=>{
                if(item.id==action.payload)
                {
                    state.count=state.count-state.items[index].quantity;
                    state.items.splice(index,1);
                }
            })
        },
        updateItemCount:(state,action)=>{
            state.items.forEach((item,index)=>{
                if(item.id==action.payload[0])
                {
                    state.items[index].quantity+=action.payload[1];
                    if(state.items[index].quantity==0)
                    {
                        console.log("quantity");
                        state.items.splice(index,1);
                    }
                }
                
            })
            state.count=state.count+action.payload[1];
        },
        setCount:(state,action)=>{
            state.count=action.payload;
        },
        setCart: (state, action) => {
  state.items = action.payload.items;
  state.count = action.payload.count;
}
    }
});

export const {addItem,removeItem,updateItemCount,setCount,setCart}=cartSlice.actions;

export default cartSlice.reducer;