# Generated by Django 5.0.7 on 2024-10-19 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backfood', '0003_token_remove_user_is_active_remove_user_is_admin_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]