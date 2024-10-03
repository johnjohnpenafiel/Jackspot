"""add seed create_collections

Revision ID: efb2df8ba9f6
Revises: 4d96e51de25a
Create Date: 2024-07-23 13:16:31.843140

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'efb2df8ba9f6'
down_revision = '4d96e51de25a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('collections',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.Integer(), nullable=False),
    sa.Column('image', sa.LargeBinary(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_collections_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_collections'))
    )
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('group', sa.String(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('address', sa.String(), nullable=True),
    sa.Column('comment', sa.String(), nullable=True),
    sa.Column('review', sa.Integer(), nullable=True),
    sa.Column('collection_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['collection_id'], ['collections.id'], name=op.f('fk_spots_collection_id_collections')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_spots'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spots')
    op.drop_table('collections')
    # ### end Alembic commands ###
