<!DOCTYPE html>
<html lang="en">
<?php $this->load->view('Web/Layout/head'); ?>

<body>
    <?php $this->load->view('Web/content/' . $chart); ?>
    <?php $this->load->view('Web/js/' . $js); ?>
</body>
</html>