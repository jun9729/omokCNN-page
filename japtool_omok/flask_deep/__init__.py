import os, sys
real_path = os.path.dirname(os.path.realpath(__file__)).replace('\\','/')
sub_path = "/".join(real_path.split("/")[:-1])
os.chdir(sub_path)

from flask import Flask, escape, request,  Response, g, make_response, send_file, send_from_directory
from flask.templating import render_template
from werkzeug.utils import secure_filename
# from . import waterencoder
# from . import waterdecoder

app = Flask(__name__)
app.debug = True


def root_path():
	'''root 경로 유지'''
	real_path = os.path.dirname(os.path.realpath(__file__))
	sub_path = "\\".join(real_path.split("\\")[:-1])
	return os.chdir(sub_path)

''' Main page '''
@app.route('/')
def index():
	return render_template('index.html')

# @app.route('/watermark')
# def watermark():
# 	return render_template('index.html')

@app.route('/omok')
def omok():
	return render_template('index.html')


# @app.route('/waterresult', methods=['GET','POST'])
# def waterresult():
# 	if request.method == 'POST':
# 		root_path()

# 		# # Reference Image
# 		# refer_img = request.form['refer_img']
# 		# refer_img_path = '/images/nst_get/'+str(refer_img)

# 		# User Image (target image)
# 		refer_img = request.files['user_img']
# 		refer_img.save('./flask_deep/static/img/moment/'+str(refer_img.filename))
# 		refer_img_path = './flask_deep/static/img/moment/'+str(refer_img.filename)

#         # User Image (target image)
# 		user_img = request.files['water_img']
# 		user_img.save('./flask_deep/static/img/moment/'+str(user_img.filename))
# 		user_img_path = './flask_deep/static/img/moment/'+str(user_img.filename)

# 		# Neural Style Transfer 
# 		transfer_img = waterencoder.main(refer_img_path, user_img_path)
# 		# transfer_img_path = './flask_deep/static/img/waterresult.png')

# 	return send_file('./static/img/moment/' + transfer_img + '_change.png')

# @app.route('/decoderesult', methods=['GET','POST'])
# def decoderesult():
# 	if request.method == 'POST':
# 		root_path()

# 		# # Reference Image
# 		# refer_img = request.form['refer_img']
# 		# refer_img_path = '/images/nst_get/'+str(refer_img)

# 		# User Image (target image)
# 		refer_img = request.files['user_img1']
# 		refer_img.save('./flask_deep/static/img/moment/'+str(refer_img.filename))
# 		refer_img_path = './flask_deep/static/img/moment/'+str(refer_img.filename)

#         # User Image (target image)
# 		user_img = request.files['water_img1']
# 		user_img.save('./flask_deep/static/img/moment/'+str(user_img.filename))
# 		user_img_path = './flask_deep/static/img/moment/'+str(user_img.filename)

# 		# Neural Style Transfer 
# 		transfer_img = waterdecoder.main(refer_img_path, user_img_path)
# 		# transfer_img_path = './flask_deep/static/img/waterresult.png')

# 	return send_file('./static/img/moment/' + transfer_img + '_recover.png')

    
@app.route('/robots.txt')
def robot_to_root():
    return send_from_directory(app.static_folder, request.path[1:])



