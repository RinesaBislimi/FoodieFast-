# Generated by Django 5.0.7 on 2024-10-18 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backfood', '0002_user_is_active_user_is_admin_user_last_login_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('token', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField()),
                ('expires_at', models.DateTimeField()),
                ('user_id', models.IntegerField()),
                ('is_used', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_admin',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_login',
        ),
        migrations.RemoveField(
            model_name='user',
            name='location',
        ),
        migrations.AddField(
            model_name='user',
            name='country',
            field=models.CharField(default='Unknown', max_length=63),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(max_length=10, null=True),
        ),
    ]