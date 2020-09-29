<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends BaseController
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth.jwt');
    }


    /**
     * Display a listing of the resource.
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $input = $request->all();
        //var_dump($input);
        $column  = isset($input['column']) ? $input['column'] : 'id';
        $sort  = isset($input['order']) ? $input['order'] : 'ASC';
        $products = Products::orderBy($column, $sort)->paginate($input['per_page']);

        //var_dump($products);
        return $this->sendResponse($products->toArray(), 'Products retrieved successfully.');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'category_id' => 'required|integer',
            'name' => 'required',
            'thumbnail' => 'required',
            'description' => 'required',
            'status' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        if(isset($input['thumbnail'])){
            $input['thumbnail']->move('upload/test', $input['thumbnail']->getClientOriginalName());
        }
        $product = Products::create($input);

        return $this->sendResponse($product->toArray(), 'Product created successfully.');
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Products::find($id);
        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }

        return $this->sendResponse($product->toArray(), 'Product retrieved successfully.');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $product_id)
    {
        $input = $request->all();
        $product = Products::find($product_id);
        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }
        $validator = Validator::make($input, [
            'category_id' => 'integer'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        $product->update($input);

        return $this->sendResponse($product->toArray(), 'Product updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $product_id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'product_ids' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        Products::destroy($input['product_ids']);
        return $this->sendResponse([], 'Product deleted successfully.');
    }
}
