# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sql = "
insert into doggos (name, story, user_id, created_at, updated_at) values ('Prodder', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 3, '8/17/2019', '11/21/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Latlux', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 7, '4/24/2019', '8/16/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bitchip', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 5, '6/18/2019', '12/26/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Kanlam', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 7, '8/15/2019', '9/12/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Vagram', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 7, '5/19/2019', '4/11/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Regrant', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 6, '9/8/2019', '4/12/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zontrax', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 6, '4/23/2019', '12/9/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Regrant', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 9, '9/11/2019', '4/28/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-Solowarm', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 8, '6/22/2019', '7/4/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Lotlux', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 7, '11/15/2019', '1/13/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Alphazap', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 5, '5/5/2019', '1/7/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bitchip', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 9, '12/13/2019', '11/11/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Redhold', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 9, '4/26/2019', '7/30/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Ronstring', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 6, '6/5/2019', '10/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Alphazap', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 5, '10/22/2019', '3/5/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zamit', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 4, '8/27/2019', '10/26/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Toughjoyfax', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 5, '3/21/2019', '6/22/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Vagram', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 8, '6/16/2019', '10/2/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-Solowarm', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 6, '3/19/2019', '6/1/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Ventosanzap', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 6, '9/20/2019', '7/6/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Redhold', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 6, '5/25/2019', '3/23/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bamity', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 8, '11/26/2019', '1/27/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bitwolf', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3, '11/23/2019', '11/2/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zaam-Dox', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 9, '5/6/2019', '4/28/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Kanlam', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '1/25/2020', '9/28/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Opela', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 4, '8/25/2019', '12/19/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Voyatouch', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 7, '4/1/2019', '2/3/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Stim', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 4, '6/10/2019', '10/6/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Konklux', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, '4/30/2019', '8/8/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Duobam', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 6, '8/18/2019', '7/27/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Treeflex', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 7, '12/2/2019', '11/20/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Opela', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4, '9/17/2019', '12/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zoolab', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4, '10/17/2019', '11/5/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Flexidy', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 3, '10/21/2019', '7/4/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Fix San', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 5, '4/14/2019', '4/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Tres-Zap', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 9, '11/24/2019', '4/16/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Veribet', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, '12/20/2019', '1/11/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Regrant', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 7, '11/12/2019', '2/28/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-find', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 7, '8/4/2019', '12/8/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Vagram', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, '1/31/2020', '9/18/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Stringtough', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 7, '7/1/2019', '9/14/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Mat Lam Tam', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 8, '8/4/2019', '5/11/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Sub-Ex', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 6, '12/1/2019', '8/5/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Treeflex', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 6, '5/2/2019', '2/15/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Duobam', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9, '2/16/2020', '5/24/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Lotstring', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5, '2/25/2019', '12/18/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-find', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 9, '5/15/2019', '6/3/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Flexidy', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 5, '11/23/2019', '2/6/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Wrapsafe', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 8, '2/17/2019', '2/12/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zathin', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 4, '1/7/2020', '1/17/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Gembucket', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, '6/17/2019', '10/24/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Vagram', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 4, '5/16/2019', '9/29/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Holdlamis', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 9, '5/15/2019', '10/22/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Wrapsafe', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 9, '3/13/2019', '2/5/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Konklux', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 4, '4/28/2019', '9/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Sub-Ex', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 8, '4/5/2019', '7/13/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Fintone', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 9, '6/26/2019', '7/8/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bigtax', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 9, '10/22/2019', '10/1/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Alpha', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 9, '1/3/2020', '8/21/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Ronstring', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 8, '9/8/2019', '11/11/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Sub-Ex', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 9, '6/23/2019', '1/24/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Opela', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 9, '12/19/2019', '12/7/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Opela', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 3, '5/19/2019', '8/21/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Alpha', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 9, '9/15/2019', '2/9/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-find', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 5, '10/27/2019', '6/22/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Sonair', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 8, '8/11/2019', '11/17/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-Solowarm', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3, '3/4/2019', '2/8/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Duobam', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 5, '1/15/2020', '11/29/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Hatity', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 4, '9/29/2019', '6/3/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Span', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 4, '4/30/2019', '5/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('It', 'Fusce consequat. Nulla nisl. Nunc nisl.', 6, '8/31/2019', '2/18/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Regrant', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 7, '9/21/2019', '5/6/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Trippledex', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 6, '5/31/2019', '4/19/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Tin', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 5, '1/13/2020', '1/1/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Konklux', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 4, '3/23/2019', '7/23/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bamity', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 7, '5/29/2019', '1/30/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Latlux', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 9, '10/10/2019', '2/29/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Treeflex', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 7, '6/5/2019', '4/2/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Opela', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 9, '7/4/2019', '3/14/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zathin', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 7, '9/12/2019', '9/23/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Rank', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 4, '12/14/2019', '4/8/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Cookley', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '1/17/2020', '6/15/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Lotlux', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, '11/13/2019', '5/11/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Trippledex', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7, '4/4/2019', '9/17/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Trippledex', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 7, '1/22/2020', '3/21/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Voyatouch', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, '2/16/2020', '11/10/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Daltfresh', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 7, '5/4/2019', '4/19/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Bigtax', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 9, '1/3/2020', '5/27/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Toughjoyfax', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 6, '5/26/2019', '5/6/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Flowdesk', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 9, '6/15/2019', '6/17/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Cardify', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 7, '6/4/2019', '1/2/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Stringtough', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 9, '3/25/2019', '11/21/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Zoolab', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 6, '12/5/2019', '12/16/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Overhold', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 6, '4/19/2019', '1/12/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Sonair', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 7, '12/3/2019', '7/27/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Alpha', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 5, '2/23/2019', '4/29/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Lotlux', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 9, '2/11/2020', '1/13/2021');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Ronstring', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, '8/24/2019', '7/16/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Y-Solowarm', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 3, '8/11/2019', '5/16/2020');
insert into doggos (name, story, user_id, created_at, updated_at) values ('Regrant', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 5, '9/10/2019', '7/3/2020');

"

 ActiveRecord::Base.connection.execute(sql)