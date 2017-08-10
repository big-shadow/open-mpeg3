<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="ui/css/tether.min.css">
        <link rel="stylesheet" href="ui/css/tether-theme-arrows-dark.min.css">
        <link rel="stylesheet" href="ui/css/bootstrap.min.css">
        <link rel="stylesheet" href="ui/css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="ui/css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="ui/css/openmp3.css">
        <script src="ui/js/lib/jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="ui/js/lib/tether.min.js" type="text/javascript"></script>
        <script src="ui/js/lib/bootstrap.min.js" type="text/javascript"></script>
        <script src="ui/js/utilities.js" type="text/javascript"></script>
        <script src="ui/js/controller.js" type="text/javascript"></script>
        <title>open-mp3</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <h1>open-mp3</h1>
                | 
                <h6 style="margin-top:1rem;">2017 &copy; ray w.</h6>
            </div>
            <div class="row">
                <table id="tracklist" class="table table-striped table-inverse table-responsive table-sm table-hover">
                    <thead>
                        <tr>
                            <th style="width:5%;">Hash</th>
                            <th style="width:45%;">Directory</th>
                            <th style="width:45%;">Filename</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <nav class="navbar fixed-bottom navbar-light bg-faded">
            <div class="row">
                <div id="album-art-col" class="col-sm-1">
                    <img id="album-art" height=50 width=50>
                </div>
                <div class="col-sm-7">
                    <span id="player-text" class="navbar-text">NULL VOID</span>
                </div>
                <div style="float:right;" class="col-sm-4">
                    <form class="form-inline">
                        <div class="input-group">
                            <span class="input-group-addon" id="search">></span>
                            <input id="s" type="text" class="form-control" placeholder="Search" aria-describedby="search" onkeyup="filterTable()">
                        </div>
                    </form>
                </div>
                <div class="row"></div>
                <audio id="player" controls="true" type='audio/mpeg; codecs="mp3"' autoplay="true"></audio>
            </div>
        </nav>
    </body>
</html>