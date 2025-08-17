import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            console.log("reached")
            state.items.forEach((item,index)=>{
                if(item.id==action.payload)
                {
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
        }
    }
});

export const {addItem,removeItem,updateItemCount}=cartSlice.actions;

export default cartSlice.reducer;