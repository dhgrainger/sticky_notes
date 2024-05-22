class StickyNotesController < ApplicationController
    def index
       stickies = StickyNote.all
       render json: stickies
    end
    def show
       sticky = StickyNote.find(params[:id])
       render json: sticky
    end
    def create
       sticky = StickyNote.create(sticky_params)
       render json: sticky
    end
    def update
       sticky = StickyNote.find_by(id: params[:id])
       sticky.update(sticky_params)
       render json: sticky
    end
    def destroy
       sticky = StickyNote.find_by(id: params[:id])
       sticky.destroy
    end
    private
    def sticky_params
       params.require(:sticky_note).permit(:id, :note_category, :note_description)
    end
  end