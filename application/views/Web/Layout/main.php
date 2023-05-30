<!DOCTYPE html>
<html lang="en">
<?php $this->load->view('Web/Layout/head'); ?>

<script src="https://kit.fontawesome.com/ed5248bbee.js" crossorigin="anonymous"></script>

<body>
    <?php $this->load->view('Web/Layout/header'); ?>
    <?php $this->load->view('Web/content/' . $isi); ?>
    <?php $this->load->view('Web/layout/footer'); ?>
    <?php $this->load->view('Web/js/' . $js); ?>
</body>
</html>