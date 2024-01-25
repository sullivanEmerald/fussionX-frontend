import { usePredictions } from "../../context/predictions"
const Stakes = (props) => {
    const {setStake} = props
    const {predictions} =  usePredictions()
 
    const filterStakeByTeam = (team) => {
        const normalizedTeam = team.toLowerCase().trim();
    
        if (normalizedTeam === "all") {
          setStake(predictions);
        } else if (normalizedTeam === "over 2.5") {
            setStake(predictions.filter((item) => item.prediction.toLowerCase().trim() === normalizedTeam))
        }  else {
          setStake(
            predictions.filter(
              (item) =>
                item.home.toLowerCase().trim().startsWith(normalizedTeam) ||
                item.away.toLowerCase().trim().startsWith(normalizedTeam)
            )
          );
        }
      };

    return (
        <>

                <div className="odd-rating">
                        <p className="rating-header">Select market:</p>
                        <button onClick={() => filterStakeByTeam("all")}>All</button>
                        <button onClick={() => filterStakeByTeam("corner")}>Corner</button>
                        <button onClick={() => filterStakeByTeam("over 2.5")}>Over 2.5</button>
                        <button onClick={() => filterStakeByTeam("pass")}>Pass</button>
                        <input type='text' placeholder="search team" onChange={(e) => filterStakeByTeam(e.target.value)} className="search-input" />
                    </div>
        
        </>
    )
}

export default Stakes;