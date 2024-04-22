<?php $pageTitle = 'Address App'; ?>
<?php include('component-head.php'); ?>

<?php $url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>

<div class="address-app">

    <form class="address-form">
        <div>
            <label for="address-1">Address 1</label>
            <input id="address-1" name="address-1" type="text">
        </div>
        <div>
            <label for="address-2">Address 2</label>
            <input id="address-2" name="address-2" type="text">
        </div>
        <div>
            <label for="address-3">Address 3</label>
            <input id="address-3" name="address-3" type="text">
        </div>
        <div>
            <label for="address-4">Address 4</label>
            <input id="address-4" name="address-4" type="text">
        </div>
        <div>
            <label for="address-5">Address 5</label>
            <input id="address-5" name="address-5" type="text">
        </div>
        <div>
            <label for="address-6">Address 6</label>
            <input id="address-6" name="address-6" type="text">
        </div>
        <div>
            <label for="address-7">Address 7</label>
            <input id="address-7" name="address-7" type="text">
        </div>
        <input type="submit">
    </form>

</div>

<script src="./blocks/address-app/address-app.js"></script>
</body>
</html>