let total = 0;
    let r = 0;//round
    function Increase() {
      total++;

      if (total == 100) {
        total = 0;
        r++;

        if (r >= 10) {
          document.getElementById("message").innerText = " spiritual goal achieved";
          r = 0; // rounds reset on 10
        } else {
          document.getElementById("message").innerText = r + " Full Tasbeeh Done";
        }
      } else {
        document.getElementById("message").innerText = "";
      }

      updateCounter();
    }

    function Reset() {
      total = 0;
      r = 0;
      document.getElementById("message").innerText = "";
      updateCounter();
    }

    function updateCounter() {
      document.getElementById("total").innerText = "Total: " + total;
      document.getElementById("rounds").innerText = "Rounds: " + r;
    }
