class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
    let pair = position.map((p,i) => [p, speed[i]] );
    pair.sort((a,b) => b[0] - a[0]);
    let time = [];
    for ( let [p, i] of pair){
        time.push((target -p )/ i);
    }
    let fleet = 1;
    let fleettime = time[0];
    for (let i = 1; i < time.length; i++){
        
        if(time[i] > fleettime) {fleet ++
        fleettime = time[i] 
        }; 
    }
    return fleet;
    
    }

}
