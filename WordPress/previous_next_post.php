<?php

$prevPost = get_previous_post();
$prevthumbnail = get_the_post_thumbnail($prevPost->ID);
previous_post_link('%link', $prevthumbnail);
previous_post_link('%link');

$nextPost = get_next_post();
$nextThumbnail = get_the_post_thumbnail($nextPost->ID);
previous_post_link('%link', $nextThumbnail);
next_post_link('%link');

?>