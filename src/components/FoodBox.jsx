// Your code here
function FoodBox({food, deleteItem}) {
    return (
        <div>
            <p>{food.name}</p>

            <img src={food.image} style={{height: "150px"}}/>

            <p>Calories: {food.calories}</p>
            <p>{food.servings} Servings</p>

            <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>

            <button onClick={() => deleteItem(food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;