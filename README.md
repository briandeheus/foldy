#Foldy
Folding menu for mobile websites

#Example
```
<div id="foldy">
    <ul id="foldy-menu">
        <li class="foldy-item"><i class="fa fa-home"></i></li>
        <li class="foldy-item"><i class="fa fa-shopping-cart"></i></li>
        <li class="foldy-item"><i class="fa fa-credit-card"></i></li>
        <li class="foldy-item"><i class="fa fa-calendar"></i></li>
        <li class="foldy-item"><i class="fa fa-cog"></i></li>
    </ul>
    <div id="foldy-home" class="foldy-home"><i class="fa fa-bars"></i></div>
</div>

<!-- Require the Foldy CSS file -->
<link href="/foldy/foldy.css" rel="stylesheet">

<!-- Include the foldy javascript sauce-->
<script src="/foldy/foldy.js"></script>

<script>
	
	//Create new foldy instance.
    var foldy = new Foldy();

    //Call init to show that we're ready
    foldy.init();

</script>
```