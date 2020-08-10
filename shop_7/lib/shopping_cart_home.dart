import 'package:flutter/material.dart';

import 'shopping_item.dart';

class ShoppingCartHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Shopping Cart'),
      ),
      floatingActionButton: FloatingActionButton(onPressed: null,
      child: Icon(Icons.add),),
      body: ShoppingList(),
    );
  }
}

class ShoppingList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: (context, i)=> ShoppingItem(),
      itemCount: 10,
    );
  }
}
