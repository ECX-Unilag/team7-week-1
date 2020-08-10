import 'package:flutter/material.dart';

class AddItemDialog extends StatefulWidget {
  @override
  _AddItemDialogState createState() => _AddItemDialogState();
}

class _AddItemDialogState extends State<AddItemDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text("Add Item"),
      contentPadding: EdgeInsets.all(16.0),
      content: Row(
        children: [
          Expanded(child: TextField(
            autofocus: true,
            decoration: InputDecoration(
              labelText: 'Item name',
              hintText: 'E.g iPhone'
            ),
          ))
        ],
      ),
      actions: [
        FlatButton(onPressed: (){
          Navigator.pop(context);
        },
            child: Text('Cancel')),
        FlatButton(onPressed: (){
          Navigator.pop(context);
        },
            child: Text('Cancel')),
      ],
    );
  }
}
