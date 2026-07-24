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
  
    let fleet = 0;
    let fleettime = 0;
    for ( let [p, i] of pair){
        const time =  ((target -p )/ i);

         if(time > fleettime) {
            fleet ++
        fleettime = time 
    }
    
  }
return fleet;
    }
}
