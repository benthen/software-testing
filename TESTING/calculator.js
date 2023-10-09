const valid = {
    validate: function (tlahir1, tlahir2, tlahir3, tmkhidmat1, tmkhidmat2, tmkhidmat3, gaji, imbuhant, gcuti, 
        cutihari, cutibulan, cutitahun, jantina, istimewa, tsarapilih1, tsarapilih2, tsarapilih3) {

            var daysofmontharray = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30,
                    31, 30, 31)
    
            b = parseInt(tlahir2);
            if (isNaN(b) || ((b == 0) || (b > 12))) {
                window.alert("Wrong Birthdate!!");
                return false;
            }
    
            h = parseInt(tlahir1);
            bul = parseInt(tlahir2);
            if (isNaN(b) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
                window.alert("Wrong Birthdate!!");
                return false;
            }
    
            th = tlahir3;
            if (th.length !== 4) {
                window.alert("Year of Birthdate must be four digits!");
                return false;
            }
    
            b = parseInt(tmkhidmat2);
            if (isNaN(b) || ((b == 0) || (b > 12))) {
                window.alert("Wrong Service Commencement Date!!");
                return false;
            }
    
            h = parseInt(tmkhidmat1);
            bul = parseInt(tmkhidmat2);
            if (isNaN(h) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
                window.alert("Wrong Service Commencement Date!!");
                return false;
            }
    
            th = tmkhidmat3;
            if (th.length !== 4) {
                window.alert("Year of Service Commencement Date must be four digits!");
                return false;
            }
    
            if (isNaN(parseInt(gaji))) {
                window.alert("Wrong Salary!!");
                return false;
            }
    
            if (isNaN(parseInt(imbuhant))) {
                window.alert("Wrong Allowance!!");
                return false;
            }
    
            if (isNaN(parseInt(gcuti))) {
                window.alert("Wrong Cash Award In Lieu of Leave!!");
                return false;
            }
    
            if (cutitahun == null || cutitahun == "") {
                cutitahun = 0;
            }
    
            if (cutibulan == null || cutibulan == "") {
                cutibulan = 0;
            }
    
            if (cutihari == null || cutihari == "") {
                cutihari = 0;
            }
    
            if (isNaN(parseInt(cutitahun))) {
                window.alert("Wrong Unpaid Leave!!");
                return false;
            }
    
            if (isNaN(parseInt(cutibulan))) {
                window.alert("Wrong Unpaid Leave!!");
                return false;
            }
    
            if (isNaN(parseInt(cutihari))) {
                window.alert("Wrong Unpaid Leave!!");
                return false;
            }
    
            if ((jantina != "L") && (jantina != "P")) {
                window.alert("Wrong Gender!!");
                return false;
            }
    
            b = parseInt(tsarapilih2);
            if (isNaN(b) || ((b == 0) || (b > 12))) {
                window.alert("Wrong Optional Retirement Date!!");
                return false;
            }
    
            h = parseInt(tsarapilih1);
            bul = parseInt(tsarapilih2);
            if (isNaN(h) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
                window.alert("Wrong Optional Retirement Date!!");
                return false;
            }
    
            th = tsarapilih3;
            if (th.length !== 4) {
                window.alert("Wrong Optional Retirement Date!!");
                return false;
            }
        }
    }


module.exports = valid

