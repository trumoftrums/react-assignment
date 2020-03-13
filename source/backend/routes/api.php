<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('register', 'RegisterController@register');

Route::group(['prefix' => 'auth', 'middleware' => []], function () {

    Route::post('login', 'JwtAuthController@login');
    Route::post('logout', 'JwtAuthController@logout');
    Route::post('refresh', 'JwtAuthController@refresh');
    Route::post('me', 'JwtAuthController@me');

});

Route::group(['prefix' => '', 'middleware' => []], function () {
    Route::resource('products', 'ProductController');

});