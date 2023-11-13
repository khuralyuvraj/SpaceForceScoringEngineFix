let data;
let num = 20;

window.onload = function ()
{
    $(".name").text(data.scoring_info.name);
    $(".start_time").text(data.scoring_info.start_time);
    $(".running_time").text(data.scoring_info.running_time);
    $(".checks_count").text(data.scoring_info.checks_complete + "/" + data.scoring_info.checks_total + " checks complete.");

    let checks = [];
    let points = 0;
    $.each(data.checks, function (key, val)
    {
        if (val.points > 0) checks.push("<div class='check'><div class='check-description'>" + val.description + "</div><div class='check-points'>" + val.points + "</div></div>");
        else checks.push("<div class='check penalty'><div class='check-description'>" + val.description + "</div><div class='check-points'>" + val.points + "</div></div>");
        points += val.points;
    });
    $("#checks").html(checks.join(''));
    $(".points").text(points);

    setTimeout(function ()
    {
        location.reload();
    }, 30000);

    num += Math.max(num * -1, points);
    num = Math.max(Math.min(420, num), 10);
    $("#checks").html(checks.join(''));
    $(".points").text(points);
};

