class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # コメントアウトする
  # def new
  # end

  def create
    binding.pry
    post = Post.create(content: params[:content])
    # redirect_to action: :index  # 追記 #renderメソッドでJSONを指定に書き換え
    render json:{ post: post }
  end

end