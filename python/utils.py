import os

MAIN_PATH = 'D:/Detection'
DATASET_PATH = 'D:/Detection/dataset'

labels = [
    { name:'ΧΑΙΡΟΜΑΙ', 'id':1 },
    { name:'ΩΡΑ', 'id':2 },
    { name:'ΑΓΚΑΛΙΑ', 'id':3 },
    { name:'ΑΓΩΝΑΣ','id':4 },
    { name:'ΑΙΜΑ', 'id':5 },
    { name:'ΑΝΑΡΧΙΚΟΣ', 'id':6 },
    { name:'ΑΝΤΡΑΣ', 'id':7 },
    { name:'ΒΑΖΩ', 'id':8 },
    { name:'ΒΑΡΟΣ', 'id':9 },
    { name:'ΒΟΗΘΑΩ', 'id':10 },
    { name:'ΒΡΑΔΥ', 'id':11 },
    { name:'ΓΕΙΑ', 'id':12 },
    { name:'ΓΡΗΓΟΡΑ', 'id':13 },
    { name:'ΔΕΥΤΕΡΟ', 'id':14 },
    { name:'ΕΠΙΣΗΣ', 'id':15 },
    { name:'ΕΤΟΙΜΟΣ', 'id':16 },
    { name:'ΕΥΧΑΡΙΣΤΩ', 'id':17 },
    { name:'ΚΑΛΑ', 'id':18 },
    { name:'ΛΑΤΡΕΥΩ', 'id':19 },
    { name:'ΜΑΖΙ', 'id':20 },
    { name:'ΜΑΚΑΡΙ', 'id':21 },
    { name:'ΜΕΛΕΤΩ', 'id':22 },
    { name:'ΜΕΝΩ', 'id':23 },
    { name:'ΜΠΟΡΩ', 'id':24 },
    { name:'ΝΑΙ', 'id':25 },
    { name:'ΟΧΙ', 'id':26 },
    { name:'ΠΑΙΔΙ', 'id':27 },
    { name:'ΠΑΡΑΚΑΛΩ', 'id':28 },
    { name:'ΠΡΩΤΑ', 'id':29 },
    { name:'ΣΚΕΦΤΟΜΑΙ', 'id':30 },
]
with open(MAIN_PATH + '\labels.pbtxt', 'w') as f:
    for label in labels:
        f.write('item { \n')
        f.write('\tname:\'{}\'\n'.format(label['name']))
        f.write('\tid:{}\n'.format(label['id']))
        f.write('}\n')
        
os.system(python {DATASET_PATH + '/generate_tf_records.py'} -x {DATASET_PATH + '/train'} -l {MAIN_PATH + '/labels.pbtxt'} -o {DATASET_PATH + '/train.record'})
os.system(python {DATASET_PATH + '/generate_tf_records.py'} -x{DATASET_PATH + '/test'} -l {MAIN_PATH + '/labels.pbtxt'} -o {DATASET_PATH + '/test.record'})

os.system('python models/research/object_detection/model_main_tf2.py \
    --model_dir=training \
    --pipeline_config_path=ssd_mobilenet_v2/pipeline.config \
    --num_train_steps=75000 \
    --sample_1_of_n_eval_examples=1 \
    --num_eval_steps= 20000 \
    --alsologtostderr')