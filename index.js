/**
 * Created by Rusakov on 03.09.2015.
 */
module.exports = AssertSoft;

function AssertSoft(){
    this.errors = [];

    this.equal = function(firstVal, lastVal){
        if(firstVal == lastVal){
            return true;
        }
        this.errors.push('��������� '+firstVal+', ����� '+lastVal);
        console.log(this.errors);
        return false;
    };
}
new AssertSoft();